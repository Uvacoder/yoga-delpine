import React from "react";
import { ONLINE_CATEGORY, STUDIO_CATEGORY } from "../utils/constants";
import fr from "date-fns/locale/fr";
import { format } from "date-fns";
import BuyButton from "./buyButton";

const CourseIcon = ({ category, id }) => {
  const onlineIcon = (
    <svg
      width="69"
      height="80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g clipPath={`url(#clip-${id})`} fill="currentColor">
        <path d="M52.525 37.7H20.623c-.644 0-1.074-.4-1.074-1V12.8c0-.6.43-1 1.074-1h31.902c.645 0 1.074.4 1.074 1v23.9c0 .6-.537 1-1.074 1zm-30.827-2H51.45V13.8H21.698v21.9z" />
        <path d="M40.924 23.9c.538-.8.967-1.8.967-2.9 0-2.8-2.363-5.2-5.37-5.2-3.008 0-5.371 2.3-5.371 5.2 0 1.1.322 2.1.967 2.9-2.041 1.2-3.438 3.4-3.438 5.9v2.8c0 .6.43 1 1.075 1h13.534c.644 0 1.074-.4 1.074-1v-2.8c0-2.4-1.29-4.6-3.438-5.9zm-4.404-6c1.72 0 3.223 1.4 3.223 3.2 0 1.8-1.397 3.2-3.223 3.2-1.826 0-3.222-1.4-3.222-3.2 0-1.8 1.504-3.2 3.222-3.2zm5.693 13.7H30.828v-1.8c0-1.9 1.181-3.6 2.9-4.4.859.5 1.826.8 2.792.8 1.075 0 2.041-.3 2.793-.8 1.719.8 2.9 2.5 2.9 4.4v1.8zM9.775 39.6c-3.975 0-7.197-3-7.197-6.7s3.222-6.7 7.197-6.7c3.974 0 7.196 3 7.196 6.7s-3.222 6.7-7.196 6.7zm0-11.3c-2.793 0-5.049 2.1-5.049 4.7s2.256 4.7 5.049 4.7c2.792 0 5.048-2.1 5.048-4.7s-2.256-4.7-5.048-4.7zM17.079 63H4.619c-1.934 0-3.545-1.5-3.545-3.3V49.3c0-2.3 1.182-4.5 3.222-5.8l.86-.5c3.007-1.7 6.767-1.7 9.774.1 3.008 1.8 4.834 4.9 4.834 8.2v9.1c0 1.5-1.181 2.6-2.685 2.6zm-7.09-19.3c-1.289 0-2.578.3-3.652 1l-.859.5c-1.396.9-2.256 2.4-2.256 4.1v10.4c0 .7.645 1.3 1.397 1.3h12.46c.322 0 .537-.2.537-.5v-9.1c0-2.7-1.397-5.1-3.867-6.6-1.074-.7-2.47-1.1-3.76-1.1zM61.548 12.4c-.645 0-1.074-.4-1.074-1 0-2-1.719-3.7-3.867-3.7-.645 0-1.074-.4-1.074-1s.43-1 1.074-1c3.33 0 6.015 2.5 6.015 5.7 0 .6-.43 1-1.074 1z" />
        <path d="M66.596 13.6c-.644 0-1.074-.4-1.074-1 0-5.3-4.619-9.6-10.204-9.6-.645 0-1.074-.4-1.074-1s.43-1 1.074-1C62.085 1 67.67 6.2 67.67 12.6c0 .6-.43 1-1.074 1zM56.5 12.7c-.86 0-1.612-.7-1.612-1.5s.752-1.5 1.611-1.5c.86 0 1.612.7 1.612 1.5s-.645 1.5-1.612 1.5z" />
      </g>
      <defs>
        <clipPath id={`clip-${id}`}>
          <path fill="#fff" d="M0 0h68.745v80H0z" />
        </clipPath>
      </defs>
    </svg>
  );
  const studioIcon = (
    <svg width="78" height="66" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M75.568 52.438c-2.808-2.184-5.928-3.744-9.204-4.758 2.73-2.262 5.148-4.992 7.02-8.19.156-.234.156-.468.078-.702-.078-.234-.312-.39-.546-.468-3.432-.936-6.942-1.17-10.296-.858a29.655 29.655 0 002.964-9.438.886.886 0 00-.234-.624.886.886 0 00-.624-.234c-3.276.468-6.396 1.404-9.204 2.808.234-3.276 0-6.552-.936-9.828-.078-.234-.234-.39-.468-.546-.234-.078-.468-.078-.702.078-2.028 1.17-3.822 2.574-5.46 4.134-1.248-5.148-3.666-10.062-7.41-14.43a.848.848 0 00-1.17 0c-3.744 4.368-6.162 9.282-7.41 14.43-1.638-1.56-3.432-2.964-5.46-4.134-.234-.156-.468-.156-.702-.078-.234.078-.39.312-.468.546-.858 3.276-1.17 6.63-.936 9.828-2.808-1.404-5.928-2.34-9.204-2.808a.886.886 0 00-.624.234.886.886 0 00-.234.624 29.655 29.655 0 002.964 9.438c-3.432-.312-6.864-.078-10.296.858-.234.078-.39.234-.546.468 0 .234 0 .546.078.702 1.872 3.198 4.29 5.928 7.02 8.19-3.198 1.014-6.318 2.574-9.126 4.758-.234.156-.312.39-.312.624 0 .234.078.468.312.624 5.304 4.056 11.7 6.084 18.018 6.084 6.162 0 12.324-1.95 17.55-5.772 5.226 3.822 11.388 5.772 17.55 5.772 6.396 0 12.714-2.028 18.018-6.084.156-.156.312-.39.312-.624 0-.234-.078-.468-.312-.624zm-4.056-12.792a28.292 28.292 0 01-7.02 7.566c-2.886-.702-5.85-.936-8.814-.78a31.672 31.672 0 006.006-7.254c3.276-.39 6.552-.312 9.828.468zM53.338 21.55c.702 3.12.858 6.24.546 9.36a31.07 31.07 0 00-5.148 3.744c.312-3.042.234-6.084-.312-9.048 1.404-1.56 3.042-2.886 4.914-4.056zm-4.992 15.6c1.56-1.638 3.276-3.12 5.226-4.29.312-.156.624-.39.936-.546.312-.156.546-.312.858-.468 2.652-1.404 5.538-2.496 8.58-2.964-.546 3.198-1.638 6.162-3.12 8.892-.156.312-.312.546-.468.858-.156.312-.39.624-.546.936-1.794 2.808-4.134 5.226-6.786 7.176-.546.39-1.014.702-1.56 1.092a32.455 32.455 0 01-3.276 1.794c-.858.39-1.716.78-2.574 1.092-.39.156-.702.234-1.092.312-.702.234-1.326.39-2.028.546-.078 0-.156 0-.234.078-.078 0-.156 0-.234.078.39-.468.702-.936 1.014-1.404l.078-.078a6.86 6.86 0 00.468-.78c.624-1.014 1.248-2.028 1.716-3.042.312-.624.624-1.17.858-1.794.936-2.574 1.716-4.992 2.184-7.488zm-21.684-15.6a25.239 25.239 0 014.992 4.056 32.12 32.12 0 00-.312 9.048c-1.56-1.404-3.276-2.73-5.148-3.744-.39-3.12-.234-6.24.468-9.36zm-10.53 7.332a29.447 29.447 0 018.58 2.964c.312.156.546.312.858.468.312.156.624.39.936.546a27.864 27.864 0 015.226 4.29c.468 2.496 1.17 4.914 2.184 7.254.234.624.546 1.248.858 1.794.546 1.014 1.092 2.028 1.716 3.042.156.234.312.468.468.78l.078.078c.312.468.702.936 1.014 1.404-.078 0-.156 0-.234-.078-.078 0-.156 0-.234-.078a19.534 19.534 0 01-2.028-.546c-.39-.078-.702-.234-1.092-.312-.858-.312-1.716-.702-2.574-1.092-1.092-.546-2.184-1.092-3.276-1.794a11.146 11.146 0 01-1.56-1.092 28.264 28.264 0 01-6.786-7.176c-.234-.312-.39-.624-.546-.936-.156-.312-.312-.546-.468-.858-1.482-2.496-2.574-5.538-3.12-8.658zM8.488 39.646c3.276-.78 6.63-.858 9.828-.468a31.672 31.672 0 006.006 7.254c-2.964-.156-5.928.078-8.814.78-2.808-2.028-5.148-4.602-7.02-7.566zm29.016 14.196c-9.594 6.084-21.996 5.772-31.278-.78a26.074 26.074 0 018.97-4.134l.936-.234c.39-.078.78-.156 1.092-.234a30.822 30.822 0 019.282-.234c2.652 1.95 5.694 3.432 8.892 4.368.624.156 1.248.39 1.95.468.312.078.624.156 1.014.234-.312.156-.624.312-.858.546zm3.432-3.51c-.078.078-.156.156-.156.234-.078.078-.156.234-.234.312-.078.078-.156.234-.234.312 0 0 0 .078-.078.078 0 .078-.078.078-.078.156s-.078.078-.078.156c0-.078-.078-.078-.078-.156s-.078-.078-.078-.156c0 0 0-.078-.078-.078-.078-.078-.156-.234-.234-.312-.078-.078-.156-.234-.234-.312-.078-.078-.156-.156-.156-.234l-.468-.702c-.312-.39-.546-.78-.78-1.17-1.794-2.73-3.042-5.694-3.9-8.658l-.468-1.872c-.078-.468-.234-1.014-.312-1.482-.546-3.12-.546-6.318-.156-9.438.078-.312.078-.702.156-1.014.078-.312.156-.624.156-.936a32.494 32.494 0 016.63-13.962 32.494 32.494 0 016.63 13.962c.078.312.156.624.156.936.078.312.078.702.156 1.014.468 3.12.39 6.318-.156 9.438-.078.468-.156 1.014-.312 1.482l-.468 1.872c-.858 3.042-2.184 5.928-3.9 8.658-.234.39-.546.78-.78 1.17-.156.312-.312.468-.468.702zm1.56 3.51c-.312-.156-.546-.39-.858-.546.312-.078.624-.156 1.014-.234.624-.156 1.326-.312 1.95-.468 3.198-.936 6.24-2.418 8.892-4.368 3.042-.468 6.24-.39 9.282.234.39.078.78.156 1.092.234l.936.234c3.12.858 6.162 2.184 8.97 4.134-9.282 6.552-21.684 6.786-31.278.78z"
        fill="currentColor"
      />
    </svg>
  );
  switch (category) {
    case ONLINE_CATEGORY:
      return onlineIcon;
    case STUDIO_CATEGORY:
      return studioIcon;
    default:
      return onlineIcon;
  }
};

const formatCourseType = (category) => {
  switch (category) {
    case ONLINE_CATEGORY:
      return "Zoom";
    case STUDIO_CATEGORY:
      return "Studio";
    default:
      return "Zoom";
  }
};

const Course = ({ course }) => {
  return (
    <div className="grid grid-cols-coursesm lg:grid-cols-courselg xl:grid-cols-course gap-x-1 lg:gap-x-2 xl:gap-x-4 items-baseline w-full max-w-md lg:max-w-full mb-5 last:mb-0 px-4 xl:px-12 py-2 xl:py-8 bg-white rounded-lg shadow">
      <div className="hidden xl:block row-span-2 self-center text-gray-600">
        <CourseIcon category={course.category} id={course.shopifyId} />
      </div>
      <div className="text-gray-800 font-medium text-base xl:text-lg leading-normal">
        {format(
          course.datetime,
          course.isSubscription ? "MMMM yyyy" : "dd MMMM yyyy HH:mm",
          {
            locale: fr,
          },
        )}
      </div>
      <div className="row-start-2 lg:row-start-1 col-start-1 lg:col-start-2 xl:col-start-3 text-gray-800 font-medium text-base xl:text-lg leading-normal">
        {course.isSubscription
          ? course.yogaType
          : `${course.yogaType} (${course.duration})`}
      </div>
      <div className="text-gray-900 text-right font-medium text-xl xl:text-3xl leading-normal">
        {parseInt(course.price)}
        <span className="text-base xl:text-xl">€</span>
      </div>
      <div className="row-start-4 lg:row-start-2 col-start-1 lg:col-start-1 xl:col-start-2 text-gray-600 font-normal text-sm xl:text-lg leading-normal">
        {formatCourseType(course.category)}
      </div>
      <div className="row-start-3 lg:row-start-2 col-start-1 lg:col-start-2 xl:col-start-3 text-gray-600 font-normal text-sm xl:text-lg leading-normal">
        {course.description}
      </div>
      <BuyButton course={course} />
    </div>
  );
};

export default Course;
