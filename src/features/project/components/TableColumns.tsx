import { Button } from "antd";
import { formatDate } from "@/utils";
import { useNavigate } from "react-router-dom";
import { IProject } from "../types";

export const TableColumns = () => {
  const navigate = useNavigate();

  return [
    {
      title: "Project ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Project Name",
      dataIndex: "project_name",
      key: "project_name",
    },
    {
      title: "Start Date",
      dataIndex: "start_date",
      key: "start_date",
      render: (start_date: string) => formatDate(start_date),
    },
    {
      title: "End Date",
      dataIndex: "end_date",
      key: "end_date",
      render: (end_date: string) => formatDate(end_date),
    },
    {
      title: "Project Manager",
      dataIndex: "project_manager",
      key: "project_manager",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: IProject) => (
        <Button
          type="primary"
          onClick={() => navigate(`/projects/edit/${record.id}`)}
        >
          Edit
        </Button>
      ),
    },
  ];
};
