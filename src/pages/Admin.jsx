import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCourses,
  addCourse,
  updateCourse,
  deleteCourse,
} from "../store/redux/courseSlice";

import Navbar from "../components/templates/Navbar";
import Card from "../components/molecules/Card";
import Input from "../components/atoms/Input";
import BodyLarge from "../components/atoms/BodyLarge";
import Button from "../components/atoms/Button";

export default function Admin() {
  const dispatch = useDispatch();
  const { data: courses, loading } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  //   form state
  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    tutorName: "",
    tutorTitle: "",
    tutorSubTitle: "",
    price: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //   mode update data
  const [editId, setEditId] = useState(null);

  const resetForm = () => {
    setForm({
      title: "",
      category: "",
      description: "",
      tutorName: "",
      tutorTitle: "",
      tutorSubTitle: "",
      price: "",
    });
    setEditId(null);
  };

  //   funsi tambah & update data
  const handleSubmit = async (e) => {
    e.preventDefault();

    // fx tolak jika input kosong
    if (Object.values(form).some((val) => !val)) {
      alert("mohon isi semua");
      return;
    }

    const payload = { ...form, price: `Rp ${form.price}K` };

    try {
      if (editId) {
        // fx mode update
        await dispatch(
          updateCourse({ id: editId, updatedCourse: payload })
        ).unwrap();
      } else {
        // fungsi mode tambah
        await dispatch(
          addCourse({
            ...payload,
            id: courses.length + 1,
            image: `https://picsum.photos/seed/course${
              courses.length + 1
            }/400/300`,
            tutorImg: `https://randomuser.me/api/portraits/${
              (courses.length + 1) % 2 === 0 ? "men" : "women"
            }/${courses.length + 1}.jpg`,
            rating: "4.9",
            ratingCount: 56,
          })
        ).unwrap();
      }
      resetForm();
    } catch (error) {
      console.error(Error);
    }
  };

  const handleEdit = (id) => {
    const course = courses.find((c) => c.id === id);
    if (!course) return;
    setForm({
      title: course.title,
      category: course.category,
      description: course.description,
      tutorName: course.tutorName,
      tutorTitle: course.tutorTitle,
      tutorSubTitle: course.tutorSubTitle,
      price: course.price.replace("Rp ", "").replace("K", ""),
    });
    setEditId(course.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (id) => {
    if (!confirm("Yakeen ?")) return;
    dispatch(deleteCourse(id));
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
                    name="category"
                    placeholder={"Kategori"}
                    className="border rounded-lg py-2 px-4"
                    type="text"
                    value={form.category}
                    onChange={handleChange}
                  />
                  <Input
                    name="title"
                    placeholder={"Judul"}
                    className="border rounded-lg py-2 px-4"
                    type="text"
                    value={form.title}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Input
                    name="price"
                    placeholder={"Harga"}
                    className="border rounded-lg py-2 px-4"
                    type="text"
                    value={form.price}
                    onChange={handleChange}
                  />
                  <Input
                    name="tutorName"
                    placeholder={"Nama Tutor"}
                    className="border rounded-lg py-2 px-4"
                    type="text"
                    value={form.tutorName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Input
                    name="tutorTitle"
                    placeholder={"Title Tutor"}
                    className="border rounded-lg py-2 px-4"
                    type="text"
                    value={form.tutorTitle}
                    onChange={handleChange}
                  />
                  <Input
                    name="tutorSubTitle"
                    placeholder={"Tempat Kerja Tutor"}
                    className="border rounded-lg py-2 px-4"
                    type="text"
                    value={form.tutorSubTitle}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <textarea
                name="description"
                placeholder={"Deskripsi"}
                className="border border-other-border rounded-lg py-2 px-4 mb-6 bg-white"
                type="textarea"
                value={form.description}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" disabled={loading}>
              {loading
                ? "Loading..."
                : editId
                ? "Update Kursus"
                : "Tambah Kursus"}
            </Button>
          </form>
        </div>

        <div className="rounded-xl bg-other-basebg border-other-border border p-4 flex flex-col gap-4 mt-6">
          {/* data kursusd */}
          <h2 className="text-center border border-other-border rounded-xl py-4 bg-white">
            Daftar Kursus
          </h2>
          <div className="flex gap-2 w-full flex-wrap">
            {courses.map((course) => (
              <div key={course.id}>
                <Card {...course} />
                <div className="flex gap-2 pt-1 pb-4">
                  <a>
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
