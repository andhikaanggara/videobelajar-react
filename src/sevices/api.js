import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCourses = () => api.get("/courses");

export const addCourse = (newCourses) => api.post("/courses", newCourses);

export const updateCourse = (id, updatedCourse) =>
  api.put(`/courses/${id}`, updatedCourse);

export const deleteCourse = (id) => api.delete(`/courses/${id}`);
