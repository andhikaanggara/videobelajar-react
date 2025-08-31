import { useEffect, useState } from "react";
import {
  getCourses,
  addCourse as addCourseApi,
  updateCourse as updateCourseApi,
  deleteCourse as deleteCourseApi,
} from "../sevices/api";

export default function useCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // GET
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCourses();
        setCourses(res.data);
      } catch (err) {
        console.error("Error GET courses:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // ADD
  const addCourse = async (newCourse) => {
    try {
      const res = await addCourseApi(newCourse);
      setCourses([...courses, res.data]);
      return res;
    } catch (err) {
      console.error("Error ADD courses:", err);
    }
  };

  // UPDATE
  const updateCourse = async (id, updateCourse) => {
    try {
      const res = await updateCourseApi(id, updateCourse);
      setCourses(courses.map((c) => (c.id === id ? res.data : c)));
    } catch (err) {
      console.error("Error UPDATE course:", err);
    }
  };

  // DELEET
  const deleteCourse = async (id) => {
    try {
      await deleteCourseApi(id);
      setCourses(courses.filter((c) => c.id !== id));
    } catch (err) {
      console.error("error DELETE course:", err);
    }
  };

  return {
    courses,
    loading,
    addCourse,
    updateCourse,
    deleteCourse,
  };
}
