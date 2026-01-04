import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function ForgotPassword() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 24 }}>
      
      {/* Heading */}
      <View style={{ marginTop: 80 }}>
        <Text style={{ fontSize: 30, fontWeight: "700", color: "#000" }}>
          Forgot Password
        </Text>
        <Text style={{ color: "#777", marginTop: 6, fontSize: 14 }}>
          Enter your email for instructions
        </Text>
      </View>

      {/* Email Input with Icon */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#E0E0E0",
          borderRadius: 14,
          paddingHorizontal: 14,
          marginTop: 40,
        }}
      >
        <MaterialIcons name="email" size={22} color="#999" />
        <TextInput
          placeholder="Email Address"
          placeholderTextColor="#999"
          style={{
            flex: 1,
            paddingVertical: 16,
            paddingLeft: 10,
            fontSize: 16,
            color: "#000",
          }}
        />
      </View>

      {/* Continue Button */}
      <Link href="/otp-confirmation" asChild>
        <TouchableOpacity
          style={{
            backgroundColor: "#5B4CF5",
            paddingVertical: 18,
            borderRadius: 16,
            marginTop: 40,
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </Link>

      {/* Back (CENTERED PROPERLY) */}
      <View style={{ marginTop: 18, alignItems: "center" }}>
        <Link href="/login">
          <Text
            style={{
              fontSize: 16,
              color: "#5B4CF5",
              fontWeight: "500",
            }}
          >
            Back
          </Text>
        </Link>
      </View>

    </View>
  );
}
