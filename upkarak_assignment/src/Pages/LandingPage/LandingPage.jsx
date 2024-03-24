import styles from "./LandingPage.module.css";
import NavBar from "../../Components/Navbar/Navbar";
import { useContext, useState } from "react";
import { DataContext } from "../../Contexts/DataContext";
import placeholderImage from "../../Images/placeholder.png";

const LandingPage = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const { state, dispatch, getEmptyFields } = useContext(DataContext);
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
    const { eventName, eventLocation, startDate, endDate, image } = formData;

    if ((eventName, eventLocation, startDate, endDate, image)) {
      dispatch({ type: "SET_FORM_DATA", payload: formData });
      alert("Event Created Successfully");
      setFormData({
        eventName: "",
        eventLocation: "",
        startDate: "",
        endDate: "",
        requireApproval: false,
        image: "",
      });
    } else {
      getEmptyFields(formData);
    }
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
                      src={imagePreview ? imagePreview : placeholderImage}
                      alt="image icon"
                    />
                    <span className={styles.title}>Personal Calender</span>
                  </div>
                </div>
                <div className={styles.titleInputContainer}>
                  <input
                    className={styles.titleInput}
                    type="text"
                    value={formData.eventName}
                    placeholder="Event Name"
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        eventName: event.target.value,
                      })
                    }
                  />
                </div>
                <section className={styles.dateSection}>
                  📆
                  <div className={styles.dateInputContainer}>
                    <div className={styles.dateIcon}>
                      <div className={styles.date}>Start</div>
                      <div className={styles.date}>End</div>
                    </div>

                    <div>
                      <div>
                        <input
                          className={`${styles.date} ${styles.dateInput}`}
                          type="date"
                          value={formData.startDate}
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
                        <input
                          className={`${styles.date} ${styles.dateInput}`}
                          type="date"
                          value={formData.endDate}
                          onChange={(event) =>
                            setFormData({
                              ...formData,
                              endDate: event.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.date}>
                    <div>🕛 GMT+05:30 Calcutta</div>
                    <hr />
                    <div>🕛 Create Multi-Session Event</div>
                  </div>
                </section>

                <div className={styles.locationInputContainer}>
                  {" "}
                  <div className={styles.locationIcon}>📍</div>
                  <div>
                    <input
                      className={styles.locationInput}
                      type="text"
                      value={formData.eventLocation}
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
                        value={formData.requireApproval}
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
              </div>
              <div className={styles.themeContainer}>
                <div className={styles.imageContainer}>
                  <img
                    alt="upload Image"
                    className={styles.previewImage}
                    src={imagePreview ? imagePreview : placeholderImage}
                  />
                  <input
                    type="file"
                    id="file-input"
                    accept="image/*"
                    // value={formData.image}
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
                <div style={{ margin: "0rem 3rem" }}>Theme</div>
                <ul className={styles.themeSelector}>
                  <li className={`${styles.theme}`}>Title </li>
                  <li className={`${styles.theme}`}>Title</li>
                  <li className={`${styles.theme}`}>Title</li>
                  <li className={`${styles.theme}`}>Title</li>
                </ul>
                <ul className={styles.themeSelector}>
                  <li className={`${styles.themeTitle}`}>Minimal </li>
                  <li className={`${styles.themeTitle}`}>Minimal</li>
                  <li className={`${styles.themeTitle}`}>Minimal</li>
                  <li className={`${styles.themeTitle}`}>Minimal</li>
                </ul>
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
            <div className={styles.buttonContainer}>
              <button className={styles.button}>Create Event</button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};
export default LandingPage;
