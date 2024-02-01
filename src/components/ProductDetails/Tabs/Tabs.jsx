import { useState } from "react"
import Reviews from "../../Reviews/Reviews"
import "./Tabs.css"
const Tabs = ({ singleProduct,setSignleProduct }) => {
  const [activeTab, setActiveTab] = useState("desc")

  const handleTabClick = (e, tab) => {
    e.preventDefault();
    setActiveTab(tab);
  }
  return (
    <div className="single-tabs">
      <ul className="tab-list">
        <li>
          <a
            href="#"
            className={`tab-button ${activeTab === "desc" ? "active" : ""}`}
            onClick={(e) => handleTabClick(e, "desc")}
          >
            Description
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`tab-button ${activeTab === "info" ? "active" : ""}`}
            onClick={(e) => handleTabClick(e, "info")}
          >
            Additional information
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`tab-button ${activeTab === "reviews" ? "active" : ""}`}
            onClick={(e) => handleTabClick(e, "reviews")}
          >
            Reviews
          </a>
        </li>
      </ul>
      <div className="tab-panel">
        <div
          className={`tab-panel-descriptions content ${activeTab === "desc" ? "active" : ""
            }`}
        >
          <div
            className="product-description"
            dangerouslySetInnerHTML={{ __html: singleProduct.description }}
          ></div>
        </div>
        <div
          className={`tab-panel-information content ${activeTab === "info" ? "active" : ""
            }`}
          id="info"
        >
          <h3>Additional information</h3>
          <table>
            <tbody>
              <tr>
                <th>Color</th>
                <td>

                 <>
                 {singleProduct.colors && singleProduct.colors.map((color, index) => (
                    <p key={index}>{color}</p>

                  ))}
                 </>
                </td>
              </tr>
              <tr>
                <th>Size</th>
                <td>
                  <p>
                    {singleProduct.size.map((item, index) => (
                      <span key={index}>
                        {item.toUpperCase()}
                        {index < singleProduct.size.length}
                      </span>
                    ))}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Reviews
          active={activeTab === "reviews" ? "content active" : "content"}
          singleProduct={singleProduct} setSignleProduct={setSignleProduct}
        />
      </div>
    </div>
  );
};

export default Tabs
