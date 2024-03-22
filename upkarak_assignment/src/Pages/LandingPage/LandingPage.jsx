import styles from "./LandingPage.module.css";
import NavBar from "../../Components/Navbar/Navbar";
import { useContext, useState } from "react";
import { DataContext } from "../../Contexts/DataContext";

const LandingPage = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const { state, dispatch } = useContext(DataContext);
  const [formData, setFormData] = useState({
    eventName: "",
    startDate: "",
    endDate: "",
    eventLocation: "",
    requireApproval: "",
    image: "",
    color: "",
    typeFace: "",
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
        // console.log(reader.result);
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview("");
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(formData);
    dispatch({ type: "SET_FORM_DATA", payload: formData });
    console.log(state.formData);
  };

  return (
    <>
      <div className={styles.container}>
        <NavBar />
        <section className={styles.eventContainer}>
          <form onSubmit={formSubmitHandler}>
            <div className={styles.formContainer}>
              <div className={styles.formInput}>
                <div className={styles.titleContainer}>
                  <div>
                    <img
                      className={styles.icon}
                      src={imagePreview ? imagePreview : ""}
                      alt="image icon"
                    />
                    <span className={styles.title}>Personal Calender</span>
                  </div>
                </div>
                <div className={styles.titleInputContainer}>
                  <input
                    className={styles.titleInput}
                    type="text"
                    placeholder="Event Name"
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        eventName: event.target.value,
                      })
                    }
                  />
                </div>
                <div className={styles.dateInputContainer}>
                  <div className={styles.dateIcon}>📆</div>
                  <div>
                    <div>
                      <span>Start</span>
                      <input
                        className={styles.date}
                        type="date"
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            startDate: event.target.value,
                          })
                        }
                      />
                    </div>{" "}
                    <div>
                      {" "}
                      <span>End</span>
                      <input
                        className={styles.date}
                        type="date"
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            endDate: event.target.value,
                          })
                        }
                      />
                    </div>
                    <div>🕛 GMT+05:30 Calcutta</div>
                    <hr />
                    <div>🕛 Create Multi-Session Event</div>
                  </div>
                </div>
                <div className={styles.locationInputContainer}>
                  {" "}
                  <div className={styles.locationIcon}>📍</div>
                  <div>
                    <input
                      className={styles.locationInput}
                      type="text"
                      placeholder="Add Event Location "
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          eventLocation: event.target.value,
                        })
                      }
                    />
                    <div>Offline location or a Virtual Link</div>
                  </div>
                </div>
                <div>Event Options</div>
                <div className={styles.eventOptionsContainer}>
                  <ul>
                    <span style={{}}>🎟️ Tickets</span>
                    <span>Free</span>
                  </ul>{" "}
                  <ul>
                    <span>👍 Require Approval</span>
                    <span>
                      <input
                        type="checkbox"
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            requireApproval: event.target.checked,
                          })
                        }
                      />
                    </span>
                  </ul>{" "}
                  <ul>
                    <span>🧺 Capacity</span>
                    <span>Unlimited</span>
                  </ul>{" "}
                  <ul>
                    <span>🥷 Visibility</span>
                    <span>Public</span>
                  </ul>
                </div>
                <button className={styles.button}>Create Event</button>
              </div>
              <div className={styles.themeContainer}>
                <div className="file-upload">
                  <img
                    alt="upload Image"
                    className={styles.previewImage}
                    src={imagePreview ? imagePreview : ""}
                  />
                  <input
                    type="file"
                    id="file-input"
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                  />
                  <label
                    style={{
                      float: "revert-layer",
                      cursor: "pointer",
                    }}
                    htmlFor="file-input"
                    className="custom-upload-btn"
                  >
                    🌅
                  </label>
                </div>{" "}
                <div>Theme</div>
                <div className={styles.themeSelector}>
                  <ul className={`${styles.theme}`}>Title </ul>
                  <ul className={`${styles.theme}`}>Title</ul>
                  <ul className={`${styles.theme}`}>Title</ul>
                  <ul className={`${styles.theme}`}>Title</ul>
                </div>
                <div className={styles.themeSelector}>
                  <ul className={`${styles.themeTitle}`}>Minimal </ul>
                  <ul className={`${styles.themeTitle}`}>Minimal</ul>
                  <ul className={`${styles.themeTitle}`}>Minimal</ul>
                  <ul className={`${styles.themeTitle}`}>Minimal</ul>
                </div>
                <div className={styles.selectors}>
                  <ul className={styles.selectorContainer}>
                    <span>
                      <span className={styles.ColorIcon}></span> Color
                    </span>
                    <select
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          color: event.target.value,
                        })
                      }
                    >
                      <option>Gray</option>
                      <option>Black</option>
                      <option>Red</option>
                    </select>
                  </ul>
                  <hr />
                  <ul className={styles.selectorContainer}>
                    <span className={styles.typeFace}>
                      <span>Ag</span> Typeface
                    </span>

                    <select
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          typeFace: event.target.value,
                        })
                      }
                    >
                      <option>Default</option>
                      <option>Default</option>
                      <option>Default</option>
                    </select>
                  </ul>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};
export default LandingPage;
