import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function OtpConfirmation() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 24 }}>
      <View style={{ marginTop: 80 }}>
        <Text style={{ fontSize: 26, fontWeight: "700" }}>
          OTP Confirmation 🔑
        </Text>
        <Text style={{ color: "#777", marginTop: 6 }}>
          Enter the 4-digit OTP sent to your email
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 40,
        }}
      >
        {[1, 2, 3, 4].map((_, i) => (
          <TextInput
            key={i}
            style={{
              width: 60,
              height: 60,
              borderWidth: 1,
              borderColor: "#E0E0E0",
              borderRadius: 12,
              textAlign: "center",
              fontSize: 20,
            }}
          />
        ))}
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#5B4CF5",
          padding: 18,
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

      <Text
        style={{
          textAlign: "center",
          marginTop: 20,
          color: "#5B4CF5",
        }}
      >
        Back
      </Text>
    </View>
  );
}
