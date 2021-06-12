import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

export const Header: React.FC = () => {
  return (
    <div className={styles["app-header"]}>
      {/* top-header */}
      <div className={styles["top-header"]}>
        <div className={styles["inner"]}>
          <Typography.Text>Make Travelling More Enjoyable</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu>
                <Menu.Item>中文</Menu.Item>
                <Menu.Item>English</Menu.Item>
              </Menu>
            }
            icon={<GlobalOutlined />}
          >
            Language
          </Dropdown.Button>
          <Button.Group className={styles["button-group"]}>
            <Button>Login</Button>
            <Button>Register</Button>
          </Button.Group>
        </div>
      </div>
      <Layout.Header className={styles["main-header"]}>
        <img src={logo} alt="" className={styles["App-logo"]} />
        <Typography.Title level={3} className={styles["title"]}>
          Around
        </Typography.Title>
        <Input.Search
          placeholder={"Enter Travel Destination, Theme, or Keyword"}
          className={styles["search-input"]}
        />
      </Layout.Header>
      <Menu mode={"horizontal"} className={styles["main-menu"]}>
        <Menu.Item key={1}>Home Page</Menu.Item>
        <Menu.Item key={2}>Weekend Trip</Menu.Item>
        <Menu.Item key={3}>Group Trip</Menu.Item>
        <Menu.Item key={4}>Personal Trip</Menu.Item>
        <Menu.Item key={5}>Family Trip</Menu.Item>
        <Menu.Item key={6}>Ocean Liner</Menu.Item>
        <Menu.Item key={7}>Hotel + Resort</Menu.Item>
        <Menu.Item key={8}>Local Trip</Menu.Item>
        <Menu.Item key={9}>Theme Trip</Menu.Item>
        <Menu.Item key={10}>Study Trip</Menu.Item>
        <Menu.Item key={11}>Visa</Menu.Item>
        <Menu.Item key={12}>Company Trip</Menu.Item>
        <Menu.Item key={13}>Luxury Trip</Menu.Item>
        <Menu.Item key={14}>Outdoor Activity</Menu.Item>
        <Menu.Item key={15}>Insurance</Menu.Item>
      </Menu>
    </div>
  );
};
