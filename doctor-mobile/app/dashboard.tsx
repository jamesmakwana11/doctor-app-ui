import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function Dashboard() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      
      
      <View style={{ marginTop: 40, marginBottom: 20 }}>
        <Text style={{ fontSize: 26, fontWeight: "700" }}>
          Hello, Doctor 👋
        </Text>
        <Text style={{ color: "#777", marginTop: 4 }}>
          Here’s your daily overview
        </Text>
      </View>

    
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <View
          style={{
            width: "48%",
            backgroundColor: "#F3F1FF",
            padding: 16,
            borderRadius: 16,
          }}
        >
          <MaterialIcons name="event" size={26} color="#5B4CF5" />
          <Text style={{ fontSize: 22, fontWeight: "700", marginTop: 10 }}>
            12
          </Text>
          <Text style={{ color: "#777" }}>Appointments</Text>
        </View>

        <View
          style={{
            width: "48%",
            backgroundColor: "#E8F7EE",
            padding: 16,
            borderRadius: 16,
          }}
        >
          <MaterialIcons name="people" size={26} color="#2E7D32" />
          <Text style={{ fontSize: 22, fontWeight: "700", marginTop: 10 }}>
            8
          </Text>
          <Text style={{ color: "#777" }}>Patients</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 10 }}>
        Quick Actions
      </Text>

      {/* Appointments */}
      <Link href="/appointments" asChild>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "#E0E0E0",
            borderRadius: 14,
            padding: 16,
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 16 }}>View Appointments</Text>
        </TouchableOpacity>
      </Link>

      {/* Profile */}
      <Link href="/profile-management" asChild>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "#E0E0E0",
            borderRadius: 14,
            padding: 16,
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 16 }}>Manage Profile</Text>
        </TouchableOpacity>
      </Link>

      {/* Earnings (dummy, no navigation) */}
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: "#E0E0E0",
          borderRadius: 14,
          padding: 16,
          marginBottom: 30,
        }}
      >
        <Text style={{ fontSize: 16 }}>Earnings</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}
