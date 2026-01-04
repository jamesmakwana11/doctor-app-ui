import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function PasswordSuccess() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        padding: 24,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 26, fontWeight: "700", marginBottom: 10 }}>
        Password Reset Successful 🎉
      </Text>

      <Text style={{ color: "#777", textAlign: "center", marginBottom: 30 }}>
        Your password has been updated successfully
      </Text>

      <Link href="/login" asChild>
        <TouchableOpacity
          style={{
            backgroundColor: "#5B4CF5",
            paddingVertical: 16,
            paddingHorizontal: 40,
            borderRadius: 16,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
            Go to Login
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
