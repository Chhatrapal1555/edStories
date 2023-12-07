import React from "react";
import Card from "../card/card";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFilter } from '@fortawesome/free-solid-svg-icons'
function MainScreen() {
  const Categories = [
    "All",
    "Artificial Intelligence",
    "Cloud Computing",
    "Devops",
    "Programing Language",
    "Mobile Application Developement",
    "Technology and Tools",
    "Get a Job in a Tech Company",
    "Others",
  ];
  const Data = [
    {
      id: "1",
      show: "https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png",
      title: "Introduction to Machine Learning",
      educator: "EdYoda",
      date: "05 jul 2019",
      description:
        "We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what a machine learning online course holds.",
    },
    {
      id: "2",
      show: "https://edyoda.s3.amazonaws.com/media/blog-images/6.png",
      title: "LAMP Stack Vs Mean Stack",
      educator: "EdYoda",
      date: "24 Aug 2019",
      description:
        "In todays dynamic world, rapid web application development with a smooth user interface that can adapt to specific features is the main business requirement.",
    },
    {
      id: "3",
      show: "https://edyoda.s3.amazonaws.com/media/blog-images/4.png",
      title: "Impact of Cloud Computing in Vrious",
      educator: "EdYoda",
      date: "24 Aug 2019",
      description:
        "Cloud computing has been rapidly gaining pace in the world of information technology. It has been observed that over 90% of global enterprises are using cloud technology as part of their business.",
    },
    {
      id: "4",
      show: "https://edyoda.s3.amazonaws.com/media/blog-images/3.png",
      title: "Challenge of Machines in Learning Big Data",
      educator: "EdYoda",
      date: "24 Aug 2019",
      description:
        "Machine Learning is a subset of artificial intelligence which is an important part of computer science. The revolution of Big Data promises to transform the way we work, live and think by enabling. ",
    },
    {
      id: "5",
      show: "https://edyoda.s3.amazonaws.com/media/blog-images/7.png",
      title: "Importance of Data Backup and Recovery",
      educator: "EdYoda",
      date: "26 Aug 2019",
      description:
        "A business must always introspect the areas where they lack in order to bring about a positive change in the work environment.",
    },
    {
      id: "6",
      show: "https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png",
      title: "What is Web Scraping?",
      educator: "Zac Clancy",
      date: "25 Sep 2019",
      description:
        "Simply put, web scraping is one of the tools developers use to gather and analyze information from the Internet. Some websites and platforms offer application programming interfaces (APIs).",
    },
  ];

  return (
    <div className="main_section">
      <div>
        <h3>Latest Post</h3>
        <div className="categorieFilter_section">
          <div>

          <FontAwesomeIcon icon="fa-sharp fa-thin fa-filter" />
            <p> <i>  <FontAwesomeIcon icon={faFilter} className="fi_icon" /> </i> Filter By Category</p>
          </div>
        </div>
        <div className="categories_section">
          {Categories.map((item) => (
            <div className="categories">
              <p> {item} </p>
            </div>
          ))}
        </div>
        <div className="card_section">
        {Data.map((items) => (
          <Card details={items} />
        ))}
        </div>
      </div>
    </div>
  );
}
export default MainScreen;
