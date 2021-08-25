import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import Box from "@material-ui/core/Box";
import { rx_tabindex } from "../modules/chats";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";
import { connect } from "react-redux";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
    height: 600,
    margin: "0 auto",
    position: "relative",
    overflow: "hidden",
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    "aria-controls": `scrollable-prevent-tabpanel-${index}`,
  };
}

const TabBox = ({ content, rx_tabindex, tabindex }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    rx_tabindex(newValue);
  };

  useEffect(() => {
    console.log("[표시]TabBox.js", tabindex);
    setValue(tabindex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabindex]);

  return (
    <Paper square className={classes.root}>
      <TabPanel value={value} index={0}>
        {content[0]}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {content[1]}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {content[2]}
      </TabPanel>

      <AppBar position="absolute" color="primary" className={classes.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example"
        >
          <Tab icon={<PersonIcon />} label="친구" {...a11yProps(0)} />
          <Tab icon={<ViewColumnIcon />} label="방리스트" {...a11yProps(1)} />
          <Tab icon={<QuestionAnswerIcon />} label="채팅" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  tabindex: state.chats.tabindex,
});

const mapDispatchToProps = (dispatch) => ({
  rx_tabindex: (val) => {
    dispatch(rx_tabindex(val));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TabBox);
