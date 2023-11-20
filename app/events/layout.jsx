import Navbar from "@/components/nav-bar/NavBar";

export default function layout({ children }) {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div>{children}</div>
    </section>
  );
}
