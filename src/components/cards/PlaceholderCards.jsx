import { Placeholder } from "react-bootstrap";

const SmallCardLoader = () => (
  <div style={{ width: "120px", flexShrink: 0 }}>
    <Placeholder as="div" animation="glow">
      <Placeholder
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "8px",
          display: "block",
          backgroundColor: "#2a2a2a",
        }}
      />
    </Placeholder>

    <Placeholder as="p" animation="glow" className="mt-2 mb-0">
      <Placeholder
        xs={10}
        style={{ backgroundColor: "#2a2a2a", borderRadius: "4px" }}
      />
    </Placeholder>

    <Placeholder as="p" animation="glow" className="mb-0">
      <Placeholder
        xs={7}
        style={{ backgroundColor: "#1c1c1e", borderRadius: "4px" }}
      />
    </Placeholder>
  </div>
);

export default SmallCardLoader;
