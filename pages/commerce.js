import Header from "../components/header";
import { connectToDatabase } from "/utils/mongodb";

export default function Commerce({commerceMentors}) {
  return (
      <>
      <Header/>
    <div id="confidant_commerce" className="confidant_commerce_Class">
      {commerceMentors.map((mentor, i)=>{return(
      <div className="Component_57___2 Component_57__2_Class" key={i}>
        <svg className="Rectangle_805">
          <rect
            className="Rectangle_805_Class"
            rx="0"
            ry="0"
            x="0"
            y="0"
            width="1398"
            height="262"
          ></rect>
        </svg>
        <div className="The_quick_brown_fox_jumps_over_Class">
                <span>{mentor.Name}</span>
                <br />
                <span>{mentor.Fees}</span>
                <br />
                <span>{mentor.Topic}</span>
              </div>
      </div>)})}
      <img className="Mask_Group_35_Class" src="Mask_Group_35.png" srcSet="Mask_Group_35.png 1x, Mask_Group_35@2x.png 2x"/>
      <div className="Category_Commerce_Class">
        <span>Category: </span>
        <span style={{ fontStyle: "normal", fontWeight: "bold" }}>
          Commerce
        </span>
      </div>
      <div className="Dropdown_sort_Class">
        <svg className="Rectangle_187">
          <rect
            className="Rectangle_187_Class"
            rx="0"
            ry="0"
            x="0"
            y="0"
            width="247"
            height="40"
          ></rect>
        </svg>
        <svg
          className="Icon_ionic-ios-arrow-down"
          viewBox="6.188 11.246 10.991 6.284"
        >
          <path
            className="Icon_ionic-ios-arrow-down_Class"
            d="M 11.68482971191406 15.63616752624512 L 15.84054756164551 11.47717666625977 C 16.14813804626465 11.16958808898926 16.6455135345459 11.16958808898926 16.94983100891113 11.47717666625977 C 17.25414848327637 11.78476524353027 17.25414657592773 12.28214263916016 16.94983100891113 12.58973121643066 L 12.2411060333252 17.30172729492188 C 11.94333457946777 17.5994987487793 11.46558952331543 17.60604286193848 11.15800285339355 17.32463264465332 L 6.416555404663086 12.59300231933594 C 6.262761116027832 12.439208984375 6.1875 12.23633098602295 6.1875 12.0367259979248 C 6.1875 11.83712005615234 6.262761116027832 11.63424301147461 6.416555404663086 11.48044776916504 C 6.724143981933594 11.17285919189453 7.221521377563477 11.17285919189453 7.525837898254395 11.48044776916504 L 11.68482971191406 15.63616752624512 Z"
          ></path>
        </svg>
      </div>
      <div className="Sort_Class">
        <span>Sort</span>
      </div>
    </div>
    </>);
}
export async function getStaticProps() {
  const { db } = await connectToDatabase();
  const commerceMentors = await db
    .collection("CommerceCategory")
    .find()
    .project({ _id: 0, Name: 1, Topic: 1, Fees: 1 })
    .toArray();

  return {
    props: { commerceMentors },
  };
}
