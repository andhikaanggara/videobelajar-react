import { Link } from "react-router-dom";
import Card from "../molecules/Card";

export default function CardSection({ className, courses }) {
  const baseClass =
    "flex flex-col items-center gap-6 md:flex-row md:flex-wrap md:items-center";

  return (
    <div className={`${baseClass} ${className}`}>
      {courses.map((course) => (
        <Link key={course.id} to={`/detail/${course.id}`}>
          <Card
            image={course.image}
            title={course.title}
            description={course.description}
            tutorImg={course.tutorImg}
            tutorName={course.tutorName}
            tutorTitle={course.tutorTitle}
            tutorSubTitle={course.tutorSubTitle}
            discount={course.discount}
            price={course.price}
            rating={course.rating}
            ratingCount={course.ratingCount}
          />
        </Link>
      ))}
    </div>
  );
}
