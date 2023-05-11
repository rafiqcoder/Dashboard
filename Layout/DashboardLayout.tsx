import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>This is side bar</div>
      <div>{children}</div>
    </>
  );
};

export default DashboardLayout;
