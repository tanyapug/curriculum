<template>
  <v-row no-gutters class="display-curriculum-page">
    <v-col
      md="6"
      offset-md="3"
      sm="8"
      offset-sm="2"
    >
    <v-row>
      <v-col cols="12">
        <h1>{{ selectedCurriculum.name }}</h1>
        <p>{{ selectedCurriculum.description }}</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-expansion-panels class="mb-6" multiple>
          <v-expansion-panel
            v-for="(section, i) in selectedCurriculum.sections"
            :key="i"
          >
            <v-expansion-panel-header expand-icon="mdi-menu-down">
              Section {{ i + 1 }} - {{ section.name }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list
                flat
                subheader
                three-line
              >
                <v-subheader>Resources</v-subheader>

                <v-list-item-group
                  multiple
                  active-class=""
                >
                  <v-list-item
                    v-for="(resource, j) in section.resources"
                    :key="resource.name + j"
                  >
                    <template v-slot:default="{ active }">
                      <v-list-item-action>
                        <v-checkbox :input-value="active"></v-checkbox>
                      </v-list-item-action>

                      <v-list-item-content>
                        <v-list-item-title>{{ resource.name }}</v-list-item-title>
                      </v-list-item-content>
                    </template>
                  </v-list-item>
                </v-list-item-group>
              </v-list>

              <v-list
                flat
                subheader
                three-line
              >
                <v-subheader>Projects</v-subheader>

                <v-list-item-group
                  multiple
                  active-class=""
                >
                  <v-list-item
                    v-for="(project, k) in section.projects"
                    :key="project.name + k"
                  >
                    <template v-slot:default="{ active }">
                      <v-list-item-action>
                        <v-checkbox :input-value="active"></v-checkbox>
                      </v-list-item-action>

                      <v-list-item-content>
                        <v-list-item-title>{{ project.name }}</v-list-item-title>
                      </v-list-item-content>
                    </template>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'DisplayCurriculum',
  data () {
    return {
      curriculumId: this.$route.params.id,
      selectedCurriculum: {}
    }
  },
  computed: {
    ...mapState(['curriculaData'])
  },
  mounted () {
    this.selectedCurriculum = this.curriculaData.find((curriculum) => {
      return curriculum.id === this.$route.params.id
    })
  }
}
</script>
