import React from "react";
import { Layout, SEO, BookingSection, PageTitle } from "../components";
import { useShopifyCourses } from "../hooks";
import { Link } from "gatsby";
import { ONLINE_CATEGORY, STUDIO_CATEGORY } from "../utils/constants";

const Schedule = () => {
  const courses = useShopifyCourses();
  return (
    <Layout>
      <SEO title="Programme" />
      <PageTitle>Programme des cours</PageTitle>
      <div className="mt-2 pb-1 lg:pb-3 text-gray-800 text-base font-normal leading-normal">
        <p>Vous pouvez réserver des cours en ligne ou en studio.</p>
        <p>
          Pour obtenir un{" "}
          <span className="font-medium">cours d’essai gratuit</span>,
          contactez-moi{" "}
          <Link
            className="text-purple-600 hover:text-purple-800 font-semibold"
            to="/contact/"
          >
            ici
          </Link>
          .
        </p>
      </div>
      <div className="mb-3 lg:mb-5">
        <BookingSection
          title="En ligne"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium."
          courses={courses.filter(
            (course) => course.category === ONLINE_CATEGORY,
          )}
        />
        <BookingSection
          title="En studio"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium."
          courses={courses.filter(
            (course) => course.category === STUDIO_CATEGORY,
          )}
        />
      </div>
    </Layout>
  );
};

export default Schedule;