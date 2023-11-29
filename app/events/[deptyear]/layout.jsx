import BackButton from "@/components/back/BackButton";

export default function layout({ children }) {
  return (
    <section>
      <div>
        <BackButton/>
      </div>
      <div>{children}</div>
    </section>
  );
}
