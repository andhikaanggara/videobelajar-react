import { useState } from "react";
import Navbar from "../components/templates/Navbar";
import Card from "../components/molecules/Card";
import Input from "../components/atoms/Input";
import Heading6 from "../components/atoms/Heading6";
import BodyLarge from "../components/atoms/BodyLarge";
import Button from "../components/atoms/Button";

export default function Admin({ courses, setCourses }) {
  //   data input data
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [tutorName, setTutorName] = useState("");
  const [tutorTitle, setTutorTitle] = useState("");
  const [tutorSubTitle, setTutorSubTitle] = useState("");
  const [price, setPrice] = useState("");

  //   mode update data
  const [editId, setEditId] = useState(null);

  //   funsi tambah atau update data
  const handleSubmit = (e) => {
    e.preventDefault();

    // fx tolak jika input kosong
    if (
      !title ||
      !category ||
      !description ||
      !tutorName ||
      !tutorTitle ||
      !tutorSubTitle ||
      !price
    ) {
      alert("mohon isi semua");
      return;
    }

    // fx mode update
    if (editId) {
      setCourses(
        courses.map((course) =>
          course.id === editId
            ? {
                ...course,
                title,
                category,
                description,
                tutorName,
                tutorTitle,
                tutorSubTitle,
              }
            : course
        )
      );
      setEditId(null);
    }

    // fungsi mode tambah
    else {
      const newCourses = {
        id: courses.length + 1,
        title,
        category,
        description,
        tutorName,
        tutorTitle,
        tutorSubTitle,
        price: `Rp ${price}K`,
        image: `https://picsum.photos/seed/course${courses.length + 1}/400/300`,
        tutorImg: `https://randomuser.me/api/portraits/${
          courses.length + (1 % 2) === 0 ? "men" : "women"
        }/${courses.length + 1}.jpg`,
        rating: "4.9",
        ratingCount: 56,
      };
      setCourses([...courses, newCourses]);
    }
    setTitle(""),
      setCategory(""),
      setDescription(""),
      setTutorName(""),
      setTutorTitle(""),
      setTutorSubTitle("");
    setPrice("");
  };

  //   fx masuk mode update
  const handleEdit = (id) => {
    const course = courses.find((course) => course.id === id);
    setTitle(course.title);
    setCategory(course.category);
    setDescription(course.description);
    setTutorName(course.tutorName);
    setTutorTitle(course.tutorTitle);
    setTutorSubTitle(course.tutorSubTitle);
    setEditId(course.id);
    setPrice(course.price);
  };

  //   buat delete kursus
  const handleDelete = (id) => {
    if (window.confirm("yakeen?")) {
      setCourses(courses.filter((course) => course.id !== id));
    }
  };

  return (
    <div>
      <Navbar />

      <div id="up" className="max-w-[1242px] px-5 py-7 mx-auto">
        {/* input CRUD */}
        <div className="rounded-xl bg-other-basebg border-other-border border p-4 flex flex-col gap-3">
          <div
            className="rounded-xl bg-white border border-other-border py-2
           text-center"
          >
            <BodyLarge>{editId ? "Edit Kursus" : "Tambah Kursus"}</BodyLarge>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-4">
                <div>
                  <Input
                    placeholder={"Kategori"}
                    className="border rounded-lg py-2 px-4"
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <Input
                    placeholder={"Judul"}
                    className="border rounded-lg py-2 px-4"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div>
                  <Input
                    placeholder={"Harga"}
                    className="border rounded-lg py-2 px-4"
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <Input
                    placeholder={"Nama Tutor"}
                    className="border rounded-lg py-2 px-4"
                    type="text"
                    value={tutorName}
                    onChange={(e) => setTutorName(e.target.value)}
                  />
                </div>
                <div>
                  <Input
                    placeholder={"Title Tutor"}
                    className="border rounded-lg py-2 px-4"
                    type="text"
                    value={tutorTitle}
                    onChange={(e) => setTutorTitle(e.target.value)}
                  />
                  <Input
                    placeholder={"Tempat Kerja Tutor"}
                    className="border rounded-lg py-2 px-4"
                    type="text"
                    value={tutorSubTitle}
                    onChange={(e) => setTutorSubTitle(e.target.value)}
                  />
                </div>
              </div>
              <textarea
                placeholder={"Deskripsi"}
                className="border border-other-border rounded-lg py-2 px-4 mb-6 bg-white"
                type="textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <Button type="sumbit">
              {editId ? "Update Kursus" : "Tambah Kursus"}
            </Button>
          </form>

          {/* data kursusd */}
          <h2 className="text-center border border-other-border rounded-xl py-4 mt-6 bg-white">
            Daftar Kursus
          </h2>
          <div className="flex gap-2 w-full flex-wrap">
            {courses.map((course) => (
              <div key={course.id}>
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
                <div className="flex gap-2 pt-1 pb-4">
                  <a href="#up">
                    <button
                      className="px-4 py-2 bg-main-primary rounded-xl cursor-pointer"
                      onClick={() => handleEdit(course.id)}
                    >
                      Edit
                    </button>
                  </a>
                  <button
                    className="px-4 py-2 bg-error-default rounded-xl cursor-pointer"
                    onClick={() => handleDelete(course.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
