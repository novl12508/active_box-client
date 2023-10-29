import Auth from "@/components/Auth/Auth";
import Header from "@/components/Header/Header";

const Page = () => {
  return (
    <>
      <Header />
      <section className='sig_in flex justify-center text-white'>
        <Auth />
      </section>
    </>
  );
};

export default Page;
