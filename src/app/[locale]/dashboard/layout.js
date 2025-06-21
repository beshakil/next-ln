import DashNavCon from "../../../components/Dashboard/DashNav/DashNavCon";
import DashSideMenuMainCon from "../../../components/Dashboard/DashNav/DashSideMenuMainCon";

export default function DashboardLayout({ children }) {

  return (
    <section className="">
      <DashNavCon />
      <DashSideMenuMainCon />
      {children}
    </section>
  );
}
