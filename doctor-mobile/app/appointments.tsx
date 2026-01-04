import { View, Text, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Appointments() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      
      {/* Header */}
      <View style={{ marginTop: 40, marginBottom: 20 }}>
        <Text style={{ fontSize: 26, fontWeight: "700" }}>
          Appointments
        </Text>
        <Text style={{ color: "#777", marginTop: 4 }}>
          Today’s scheduled appointments
        </Text>
      </View>

      {/* Appointment Cards */}
      {[1, 2, 3].map((_, index) => (
        <View
          key={index}
          style={{
            borderWidth: 1,
            borderColor: "#E0E0E0",
            borderRadius: 16,
            padding: 16,
            marginBottom: 14,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 6,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              Patient Name
            </Text>
            <MaterialIcons name="more-vert" size={20} color="#777" />
          </View>

          <Text style={{ color: "#777", marginBottom: 6 }}>
            10:30 AM • Video Consultation
          </Text>

          <Text style={{ color: "#5B4CF5", fontWeight: "600" }}>
            Upcoming
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}
