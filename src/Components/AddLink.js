import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
} from "reactstrap";

export default function Addlink(props) {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [url, setURL] = useState("");
  const [tags, setTags] = useState([]);

  const toggle = () => {
    setModal(!modal);
  };

  const addTags = (event) => {
    let newTags = tags.slice();
    newTags[event.target.id] = event.target.value;
    setTags(newTags);
  };

  const addTagBox = () => {
    let newTags = tags.slice();
    newTags.push("");
    setTags(newTags);
  };

  const deleteTagBox = () => {
    let newTags = tags.slice();
    newTags.pop();
    setTags(newTags);
  };

  const addLink = () => {
    props.addLinkHandler(name, url, tags);
    setName("");
    setURL("");
    setTags([]);
  };

  return (
    <div>
      <Button color="warning" onClick={toggle}>
        Add Link
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <Form onSubmit={addLink}>
          <ModalHeader toggle={toggle}>Link Submittion Form</ModalHeader>

          <ModalBody>
            <label for="name">Name</label>
            <br />
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mb-3"
            />
            <br />
            <label for="url">URL</label>
            <br />
            <input
              type="url"
              name="url"
              value={url}
              onChange={(event) => setURL(event.target.value)}
              className="mb-3"
            />
            <br />
            <label for="tags">Tags</label>
            <br />
            {tags.map((tag, index) => {
              return (
                <input
                  key={index}
                  id={index}
                  type="text"
                  name="tags"
                  value={tag}
                  onChange={(event) => addTags(event)}
                  className="me-3 mb-3"
                />
              );
            })}
            <br />
            <Button color="success" onClick={addTagBox} className="me-3">
              Add tag
            </Button>
            <Button color="danger" onClick={deleteTagBox}>
              Delete tag
            </Button>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" type="submit" value="submit">
              Submit
            </Button>{" "}
            <Button onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
}
