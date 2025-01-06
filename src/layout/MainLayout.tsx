import { Layout } from "antd";

type MainLayoutProps = {
  children: React.ReactNode;
};

const { Header, Content, Sider } = Layout;

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{ backgroundColor: "#001529" }}
      >
        <div className="text-white text-lg font-bold p-4">
          Favorite Projects
        </div>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
          <h1 className="text-center text-xl">Project Management</h1>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div className="site-layout-background p-4">{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
};
