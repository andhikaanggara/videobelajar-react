import Card from "../molecules/Card";
import Card1 from "../../assets/images/card1.jpg";
import Card2 from "../../assets/images/card2.png";
import Card3 from "../../assets/images/card3.png";
import Card4 from "../../assets/images/card4.png";
import Card5 from "../../assets/images/card5.png";
import Card6 from "../../assets/images/card6.png";
import Card7 from "../../assets/images/card7.png";
import Card8 from "../../assets/images/card8.png";
import Card9 from "../../assets/images/card9.png";
import CardAvatar1 from "../../assets/images/card-avatar1.png";
import CardAvatar2 from "../../assets/images/card-avatar2.png";
import CardAvatar3 from "../../assets/images/card-avatar3.png";
import CardAvatar4 from "../../assets/images/card-avatar4.png";
import CardAvatar5 from "../../assets/images/card-avatar5.png";
import CardAvatar6 from "../../assets/images/card-avatar6.png";
import CardAvatar7 from "../../assets/images/card-avatar7.png";
import CardAvatar8 from "../../assets/images/card-avatar8.png";
import CardAvatar9 from "../../assets/images/card-avatar9.png";

export default function CardSection({className}) {
  const cardData = [
    {
      image: Card1,
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
      tutorImg: CardAvatar1,
      tutorName: "Jenna Ortega",
      tutorTitle: "Senior Accountant",
      tutorSubTitle: "Gojeg",
      price: "Rp 300K",
      rating: "3.5",
      ratingCount: 86,
    },
    {
      image: Card2,
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
      tutorImg: CardAvatar2,
      tutorName: "Jenna Ortega",
      tutorTitle: "Senior Accountant",
      tutorSubTitle: "Gojeg",
      price: "Rp 300K",
      rating: "3.5",
      ratingCount: 86,
    },
    {
      image: Card3,
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
      tutorImg: CardAvatar3,
      tutorName: "Jenna Ortega",
      tutorTitle: "Senior Accountant",
      tutorSubTitle: "Gojeg",
      price: "Rp 300K",
      rating: "3.5",
      ratingCount: 86,
    },
    {
      image: Card4,
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
      tutorImg: CardAvatar4,
      tutorName: "Jenna Ortega",
      tutorTitle: "Senior Accountant",
      tutorSubTitle: "Gojeg",
      price: "Rp 300K",
      rating: "3.5",
      ratingCount: 86,
    },
    {
      image: Card5,
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
      tutorImg: CardAvatar5,
      tutorName: "Jenna Ortega",
      tutorTitle: "Senior Accountant",
      tutorSubTitle: "Gojeg",
      price: "Rp 300K",
      rating: "3.5",
      ratingCount: 86,
    },
    {
      image: Card6,
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
      tutorImg: CardAvatar6,
      tutorName: "Jenna Ortega",
      tutorTitle: "Senior Accountant",
      tutorSubTitle: "Gojeg",
      price: "Rp 300K",
      rating: "3.5",
      ratingCount: 86,
    },
    {
      image: Card7,
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
      tutorImg: CardAvatar7,
      tutorName: "Jenna Ortega",
      tutorTitle: "Senior Accountant",
      tutorSubTitle: "Gojeg",
      price: "Rp 300K",
      rating: "3.5",
      ratingCount: 86,
    },
    {
      image: Card8,
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
      tutorImg: CardAvatar8,
      tutorName: "Jenna Ortega",
      tutorTitle: "Senior Accountant",
      tutorSubTitle: "Gojeg",
      price: "Rp 300K",
      rating: "3.5",
      ratingCount: 86,
    },
    {
      image: Card9,
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
      tutorImg: CardAvatar9,
      tutorName: "Jenna Ortega",
      tutorTitle: "Senior Accountant",
      tutorSubTitle: "Gojeg",
      price: "Rp 300K",
      rating: "3.5",
      ratingCount: 86,
    },
  ];
  const baseClass = "flex flex-col items-center gap-6 sm:flex-row sm:flex-wrap  sm:items-center sm:w-full"

  return (
    <div className={`${baseClass} ${className}`}>
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            tutorImg={card.tutorImg}
            tutorName={card.tutorName}
            tutorTitle={card.tutorTitle}
            tutorSubTitle={card.tutorSubTitle}
            discount={card.discount}
            price={card.price}
            rating={card.rating}
            ratingCount={card.ratingCount}
          />
        ))}
      </div>
  );
}
