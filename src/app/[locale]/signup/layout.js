import NavbarHeader from "../../../components/NavbarCom/NavbarHeader";

export default function SignupLayout({ children }) {

    return (
        <section className="">
            <NavbarHeader />
            {children}
        </section>
    );
}
