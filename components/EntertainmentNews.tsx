import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const EntertainmentNews = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.articleContainer}>
          <Image
            source={require("./assets/news_article1.jpg")}
            style={styles.articleImage}
          />
          <View style={styles.articleInfo}>
            <Text style={styles.title}>
              New Study Finds Link Between Exercise and Productivity
            </Text>
            <Text style={styles.source}>Health • May 24, 2023</Text>
          </View>
        </View>

        <View style={styles.articleContainer}>
          <Image
            source={require("./assets/news_article2.jpg")}
            style={styles.articleImage}
          />
          <View style={styles.articleInfo}>
            <Text style={styles.title}>
              Tech Giant Announces New Line of Smart Home Devices
            </Text>
            <Text style={styles.source}>Technology • May 25, 2023</Text>
          </View>
        </View>

        <View style={styles.articleContainer}>
          <Image
            source={require("./assets/news_article3.jpg")}
            style={styles.articleImage}
          />
          <View style={styles.articleInfo}>
            <Text style={styles.title}>
              City Council Approves Plan to Expand Public Transportation
            </Text>
            <Text style={styles.source}>Politics • May 26, 2023</Text>
          </View>
        </View>

        <View style={styles.articleContainer}>
          <Image
            source={require("./assets/news_article4.jpg")}
            style={styles.articleImage}
          />
          <View style={styles.articleInfo}>
            <Text style={styles.title}>
              Researchers Discover Potential Treatment for Alzheimer's
            </Text>
            <Text style={styles.source}>Health • May 27, 2023</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  articleContainer: {
    flexDirection: "row",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#f0f0f0",
    borderRadius: 8,
    overflow: "hidden",
  },
  articleImage: {
    width: 120,
    height: 120,
  },
  articleInfo: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  source: {
    fontSize: 14,
    color: "#666",
  },
});

export default EntertainmentNews;