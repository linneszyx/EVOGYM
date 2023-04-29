import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            EVOGYM is more than just a gym. We are a wellness community
            committed to helping individuals improve their overall health and
            fitness through state-of-the-art equipment, expert personal
            training, nutrition coaching, and recovery services. Our supportive
            and inclusive environment encourages growth and positive lifestyle
            changes for all.
          </p>
          <p>©EVOGYM All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Social</h4>
          <p className="my-5 ">
            <a href="https://github.com/linneszyx" target="_blank">
              GitHub
            </a>
          </p>
          <p className="my-5">
            <a href="https://www.linkedin.com/in/linneszyx/" target="_blank">
              LinkedIn
            </a>
          </p>
          <p className="my-5">
            <a href="https://www.instagram.com/linneszyx/" target="_blank">
              Instagram
            </a>
          </p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Suryansh Upadhyay</p>
          <p>+91 7521578952</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
