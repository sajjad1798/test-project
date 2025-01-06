import React, { useEffect } from "react";
import { Form, Input, Button, Spin, message } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import { formatDate } from "@/utils";
import { useGetProjectByID } from "../api/getProjectById";
import { useUpdateProject } from "../api/updateProject";

export const Details: React.FC = () => {
  const [form] = Form.useForm();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { getProjectByID, data, loading } = useGetProjectByID();
  const { updateProject, loading: updatingProject } = useUpdateProject();

  useEffect(() => {
    if (id) {
      getProjectByID({
        path: id,
      });
    }
  }, [id]);

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        project_id: data.id,
        project_name: data.project_name,
        description: data.description,
        start_date: formatDate(data.start_date),
        end_date: formatDate(data.end_date),
        project_manager: data.project_manager,
      });
    }
  }, [data, form]);

  const onFinish = async (values: any) => {
    const res = await updateProject({
      path: id,
      body: values,
    });
    if (res) {
      navigate("/projects");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1>Project Detail Page</h1>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
      >
        <Form.Item
          label="Project ID"
          name="project_id"
          rules={[{ required: true, message: "Project ID is required" }]}
        >
          <Input disabled />
        </Form.Item>
        <Form.Item
          label="Project Name"
          name="project_name"
          rules={[{ required: true, message: "Project Name is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label="Start Date"
          name="start_date"
          rules={[{ required: true, message: "Start Date is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="End Date"
          name="end_date"
          rules={[{ required: true, message: "End Date is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Project Manager"
          name="project_manager"
          rules={[{ required: true, message: "Project Manager is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={updatingProject}>
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
