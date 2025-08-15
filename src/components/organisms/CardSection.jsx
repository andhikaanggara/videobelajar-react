import Card from "../molecules/Card";

export default function CardSection({ className, courses }) {
  
  const baseClass =
    "flex flex-col items-center gap-6 sm:flex-row sm:flex-wrap  sm:items-center sm:w-full";

  return (
    <div className={`${baseClass} ${className}`}>
      {courses.map((course, index) => (
        <Card
          key={index}
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
      ))}
    </div>
  );
}
