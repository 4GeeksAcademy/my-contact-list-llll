import React, { useContext, useEffect } from "react";
import { Context } from "./../store/appContext";
import { Link, useParams } from "react-router-dom";
import "../../styles/index.css";

export const ContactCard = ({ name, address, phone, email, id }) => {

    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.getAllContacts()
    }, [])


    return (
        <div className="container contact-card">
            <div className="row">
                <div className="col-3">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg"
                        className="rounded-circle" />
                </div>
                <div className="col-9">
                    <div className="d-flex name">
                        <div>
                            <h4>{name}</h4>
                        </div>
                        <div className="ms-auto me-2">
                            <span>
                                <Link className="edit-contact" to={`/editcontact/${id}`}>
                                    <i className="fa-solid fa-user-pen me-4"></i>
                                </Link>
                                <i className="fa-solid fa-user-minus"
                                    onClick={() => {
                                        actions.deleteContact(id)
                                    }}
                                // data-bs-toggle="modal" data-bs-target="#exampleModal"
                                ></i></span>
                        </div>
                    </div>
                    <div className="d-flex flex-column info">
                        <div className="p-1">
                            <i className="fa-solid fa-location-crosshairs"></i>
                            <span className="ms-3">{address}</span>
                        </div>
                        <div className="p-1">
                            <i className="fa-solid fa-mobile-screen-button"></i>
                            <span className="ms-3">{phone}</span>
                        </div>
                        <div className="p-1">
                            <i className="fa-solid fa-envelope-open-text"></i>
                            <span className="ms-3">{email}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
