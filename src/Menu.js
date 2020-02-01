import Common from "./components/core/Common";

const Menu = (name) => {
    let customProps = {
        "prop1" :"",
        "prop2":"",
        "prop3":"",
        "prop4":""
    };

    switch (name) {
        case "Component1": return <Common {...this.props} {...customProps} />;
        case "Component2": return <Common {...this.props} {...customProps} />;
        case "component3": return <Common {...this.props} {...customProps} />;

    }
};

export default Menu;
