import { useEffect } from "react";
import { useGetProjects } from "../api/getProjects";
import { Spin, Table } from "antd";
import { TableColumns } from "../components/TableColumns";

export const List = () => {
  const { getProjects, data, loading } = useGetProjects();

  const columns = TableColumns();

  useEffect(() => {
    getProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div>
      <h1>Project List</h1>
      <Table
        dataSource={data}
        columns={columns}
        rowKey="project_id"
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};
