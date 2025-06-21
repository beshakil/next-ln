import NavbarHeader from "../../../components/NavbarCom/NavbarHeader";

export default function LoginLayout({ children }) {

    return (
        <section className="">
            <NavbarHeader />
            {children}
        </section>
    );
}
