import { useContext } from "react";
import EventCard from "../../Components/EventCard/EventCard";
import styles from "./ProductListingPage.module.css";
import { DataContext } from "../../Contexts/DataContext";

const ProductListingPage = () => {
  const { state, dispatch } = useContext(DataContext);

  return (
    <>
      <section className={styles.container}>
        <header>
          <div className={styles.headerContainer}>
            <h2>Events</h2>
            <span>Upcoming/Past</span>
          </div>
        </header>
        {state.formData.map((data) => (
          <EventCard formData={data} />
        ))}
      </section>
    </>
  );
};

export default ProductListingPage;
