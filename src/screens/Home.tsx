import React, { useState } from "react";
import { VStack, FlatList, HStack, Heading, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";

import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { ExerciseCard } from "@components/ExerciseCard";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

export function Home() {
  const [groups, setGroups] = useState(["costa", "ombro", "bíceps", "perna"]);
  const [exercises, setExercises] = useState(["1", "2", "3", "4"]);
  const [groupSelected, setGroupSelected] = useState("costa");

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenExerciseDetails() {
    navigation.navigate("exercise");
  }

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
        minH={10}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md">
            Exercícios
          </Heading>

          <Text color="gray.200" fontSize="sm">
            4
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <ExerciseCard onPress={handleOpenExerciseDetails} />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 20 }}
        />
      </VStack>
    </VStack>
  );
}
