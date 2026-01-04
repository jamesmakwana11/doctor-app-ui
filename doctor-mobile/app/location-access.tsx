import { View, Text, TouchableOpacity } from "react-native";

export default function LocationAccess() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "#fff",
          padding: 24,
          borderRadius: 20,
          width: "85%",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "700", marginBottom: 10 }}>
          What is Your Location?
        </Text>

        <Text style={{ color: "#777", textAlign: "center", marginBottom: 20 }}>
          We need your location to suggest nearby services
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: "#5B4CF5",
            paddingVertical: 14,
            borderRadius: 14,
            width: "100%",
            marginBottom: 10,
          }}
        >
          <Text style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>
            Allow Location Access
          </Text>
        </TouchableOpacity>

        <Text style={{ color: "#5B4CF5", marginTop: 6 }}>
          Enter Location Manually
        </Text>
      </View>
    </View>
  );
}
