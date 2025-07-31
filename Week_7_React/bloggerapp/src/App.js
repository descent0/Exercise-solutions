
import './App.css';
import BookDetails from "./Components/BookDetails"
import BlogDetails from './Components/BlogDetails';
import CourseDetails from './Components/CourseDetails'

import { books } from './data/books';
import { blogs } from './data/blogs';
import { courses } from './data/courses';

function App() {
  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (
    <div className="container">
      {showBooks && (
        <div className="section st2">
          <h1>Book Details</h1>
          <BookDetails books={books} />
        </div>
      )}

      {showBlogs ? (
        <div className="section v1">
          <h1>Blog Details</h1>
          <BlogDetails blogs={blogs} />
        </div>
      ) : (
        <p>Blogs not visible</p>
      )}

      {showCourses && (
        <div className="section mystyle1">
          <h1>Course Details</h1>
          <CourseDetails courses={courses} />
        </div>
      )}
    </div>
  );
}

export default App;
