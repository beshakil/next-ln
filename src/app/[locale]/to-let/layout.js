import NavbarHeader from "../../../components/NavbarCom/NavbarHeader";
import ToLetSubHeader from "../../../components/ToLetPage/ToLetSubHeader";

export default function ToLetLayout({ children }) {

    return (
        <section className="">
            <NavbarHeader />
            <ToLetSubHeader />
            {children}
        </section>
    );
}
