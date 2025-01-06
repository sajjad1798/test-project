import { AxiosRequestConfig } from "axios";
import { useEffect, useState, useCallback, useRef } from "react";
import { axios } from "@/lib/axios";

type Config = AxiosRequestConfig;

type StateType<TData> = {
  data: TData | undefined;
  loading: boolean;
  error: string | null;
};

type ExecuteFunctionParams = {
  url?: string;
  params?: Record<string, any>;
  path?: string;
  body?: Record<string, any>;
  headers?: Record<string, string>;
} & AxiosRequestConfig;

type ResultType<TData> = {
  onSuccess?: (response: TData) => void;
  onError?: (error: any) => void;
};

type ReturnType<TData> = {
  execute: (args?: ExecuteFunctionParams) => Promise<TData>;
} & StateType<TData>;

function useApi<TData>(
  config: Config,
  result?: ResultType<TData>
): ReturnType<TData> {
  const [state, setState] = useState<StateType<TData>>({
    data: undefined,
    loading: false,
    error: null,
  });

  const abortControllerRef = useRef<AbortController | null>(null);

  const execute = useCallback(
    async (props?: ExecuteFunctionParams) => {
      try {
        if (abortControllerRef.current) {
          abortControllerRef.current.abort();
        }

        const abortController = new AbortController();
        abortControllerRef.current = abortController;

        setState({ ...state, data: undefined, loading: true, error: null });

        const { params, path, url, body, headers, method } = props || {};

        const axiosConfig: AxiosRequestConfig = {
          ...config,
          headers: { ...config.headers, ...headers },
          url: path ? `${config.url}/${path}` : url || config.url,
          params: params || config.params,
          data: body,
          method: method || config.method,
          signal: abortController.signal,
        };

        // Make the API call
        const { data: response } = await axios(axiosConfig);

        // Trigger the onSuccess callback if provided
        if (result?.onSuccess) {
          result.onSuccess(response);
        }

        setState({
          data: response,
          loading: false,
          error: null,
        });

        return response;
      } catch (error: any) {
        // Trigger the onError callback if provided
        if (result?.onError) {
          result.onError(error);
        }

        setState({
          data: undefined,
          loading: false,
          error: error?.message || "Something went wrong",
        });

        throw error;
      }
    },
    [config, result]
  );

  useEffect(() => {
    // Cleanup the abort controller on unmount
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  return { ...state, execute };
}

export default useApi;
