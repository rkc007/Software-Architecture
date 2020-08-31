import React, { useEffect } from "react";
import { withStyles, useTheme } from "@material-ui/core/styles";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TextField from "@material-ui/core/TextField";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Typography } from '@material-ui/core';


const axios = require("axios");

const styles = theme => ({
  root: {
    // flex: 3,
    overflowY: "scroll",
    paddingBottom: 60
  },
  searchPaper: {
    width: "60%",
    marginLeft: "21%"
    // padding: 20,
    // borderRadius: 50,
  },
  table: {
    minWidth: 300
  },
  searchBox: {
    display: "flex",
    marginLeft: "20%"
  },
  button: {
    height: 42,
    marginTop: "3.5%",
    marginLeft: "4%"
  },
  tablecell: {
    fontSize: 18
  },
  option: {
    fontSize: 18
  }
});

class BookSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showRemoveIcon: false,
      searchValue: "",
      tabValue: 0,
      addedbook: []
    };
  }

  async componentDidMount() {}

  handleText = async e => {
    this.setState({ searchValue: e.target.value });
    console.log(e.target.value);
    if (this.state.tabValue == 0) {
      await axios.get(`/api/bookid?id=${e.target.value}`).then(res => {
        console.log(res);
        this.setState({ books: res.data });
      });
    } else if (this.state.tabValue == 1) {
      await axios.get(`/api/title?id=${e.target.value}`).then(res => {
        console.log(res);
        this.setState({ books: res.data });
      });
    } else if (this.state.tabValue == 2) {
      await axios.get(`/api/firstname?id=${e.target.value}`).then(res => {
        console.log(res);
        this.setState({ books: res.data });
      });
    } else {
      await axios.get(`/api/lastname?id=${e.target.value}`).then(res => {
        console.log(res);
        this.setState({ books: res.data });
      });
    }
  };

  handleChange = async (field, tabIndex) => {
    this.setState({
      tabValue: tabIndex,
      addedbook: [],
      books: [],
      searchValue: ""
    });
  };

  handleRowClick = async row => {
    console.log(row);
    let addedbook = [...this.state.addedbook];
    console.log(addedbook);
    addedbook.push({ value: row });
    this.setState({ addedbook });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper elevation={3}>
          <Tabs
            value={this.state.tabValue}
            onChange={this.handleChange.bind(this)}
            indicatorColor="primary"
            textColor="secondary"
            centered
          >
            <Tab label="Book Id" />
            <Tab label="Title" />
            <Tab label="First Name" />
            <Tab label="Last Name" />
          </Tabs>
        </Paper>
        <Typography variant="h4" component="h4" style={{textAlign:'center', marginTop:'2%'}}>
        Results
        </Typography>
        <div className={classes.sameAlign} style={{ marginTop: "3%" }}>
          <div className={classes.searchPaper}>
            <TableContainer component={Paper} elevation={7}>
              <Table size="medium" className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tablecell}>Bood Id</TableCell>
                    <TableCell className={classes.tablecell}>Title</TableCell>
                    <TableCell className={classes.tablecell}>
                      First Name
                    </TableCell>
                    <TableCell className={classes.tablecell}>
                      Last Name
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.addedbook.map((row, id) => (
                    <TableRow key={id}>
                      <TableCell
                        className={classes.tablecell}
                        //   component="th"
                        //   scope="row"
                      >
                        {row.value.book_id}
                      </TableCell>
                      <TableCell className={classes.tablecell} align="left">
                        {row.value.title}
                      </TableCell>
                      <TableCell className={classes.tablecell} align="left">
                        {row.value.first_name}
                      </TableCell>
                      <TableCell className={classes.tablecell} align="left">
                        {row.value.last_name}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter></TableFooter>
              </Table>
            </TableContainer>
          </div>
        </div>
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Search "
          value={this.state.searchValue}
          onChange={e => this.handleText(e)}
          style={{ margin: "3%" }}
        />
        <Typography variant="h4" component="h4" style={{textAlign:'center', marginBottom:'2%'}}>
        Search
        </Typography>
        <div className={classes.sameAlign}>
          <div className={classes.searchPaper}>
            <TableContainer component={Paper} elevation={7}>
              <Table size="medium" className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tablecell}>Bood Id</TableCell>
                    <TableCell className={classes.tablecell}>Title</TableCell>
                    <TableCell className={classes.tablecell}>
                      First Name
                    </TableCell>
                    <TableCell className={classes.tablecell}>
                      Last Name
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.books.map((row, id) => (
                    <TableRow
                      key={id}
                      onClick={this.handleRowClick.bind(this, row)}
                    >
                      <TableCell
                        className={classes.tablecell}
                        //   component="th"
                        //   scope="row"
                      >
                        {row.book_id}
                      </TableCell>
                      <TableCell className={classes.tablecell} align="left">
                        {row.title}
                      </TableCell>
                      <TableCell className={classes.tablecell} align="left">
                        {row.first_name}
                      </TableCell>
                      <TableCell className={classes.tablecell} align="left">
                        {row.last_name}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter></TableFooter>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(BookSearch);
