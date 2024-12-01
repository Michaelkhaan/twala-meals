import AddResturent from "./components/addResturent/AddResturent";
import Card from "./components/card/Card";
import Delivery from "./components/delivery/Delivery";
import Navbar from "./components/navbar/Navbar";
import styles from "./components/card/card.module.scss";
import Image from "next/image";
import App from "./components/app/App";
import Footer from "./components/footer/Footer";

export default function Home() {
  const cardData = [
    {
      image: "/Rectangle 207.png",
      heading: "Need Help? We’re Here for You",
      paragraph:
        "Our customer support team is available 24/7 to help you with your questions. Check out our Help Center for answers to frequently asked questions or reach out directly.",
      button: "Visit Help Center",
    },
    {
      image: "/Rectangle 207.png",
      heading: "Need Help? We’re Here for You",
      paragraph:
        "Our customer support team is available 24/7 to help you with your questions. Check out our Help Center for answers to frequently asked questions or reach out directly.",
      button: "Visit Help Center",
    },
    {
      image: "/Rectangle 207.png",
      heading: "Need Help? We’re Here for You",
      paragraph:
        "Our customer support team is available 24/7 to help you with your questions. Check out our Help Center for answers to frequently asked questions or reach out directly.",
      button: "Visit Help Center",
    },
  ];
  return (
    <div>
      <Navbar />
      <Delivery />
      <AddResturent />
      <div className={styles?.wrapper}>
        {cardData?.map((e, index) => (
          <Card
            key={index}
            src={e?.image}
            heading={e?.heading}
            para={e?.paragraph}
            button={e?.button}
          />
        ))}
      </div>
      <div className={styles?.premiumcard}>
        <Image
          src="/Rectangle 200.png"
          alt=""
          width={0}
          height={0}
          className={styles?.getpremium}
          unoptimized
        />
      </div>
      <div className={styles?.wrap}>
        <App />
        <Image
          src="/Female hand.png"
          alt=""
          width={0}
          height={0}
          className={styles?.female}
          unoptimized
        />
      </div>
      <Footer/>
    </div>
  );
}
