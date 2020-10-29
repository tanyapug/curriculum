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
          <v-expansion-panel>
            <v-expansion-panel-header expand-icon="mdi-menu-down">
              Section 1
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list
                flat
                subheader
                three-line
              >
                <v-subheader>Resources</v-subheader>

                <v-list-item-group
                  v-model="settings"
                  multiple
                  active-class=""
                >
                  <v-list-item>
                    <template v-slot:default="{ active }">
                      <v-list-item-action>
                        <v-checkbox :input-value="active"></v-checkbox>
                      </v-list-item-action>

                      <v-list-item-content>
                        <v-list-item-title>Notifications</v-list-item-title>
                        <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                      </v-list-item-content>
                    </template>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:default="{ active }">
                      <v-list-item-action>
                        <v-checkbox :input-value="active"></v-checkbox>
                      </v-list-item-action>

                      <v-list-item-content>
                        <v-list-item-title>Sound</v-list-item-title>
                        <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
                      </v-list-item-content>
                    </template>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:default="{ active }">
                      <v-list-item-action>
                        <v-checkbox :input-value="active"></v-checkbox>
                      </v-list-item-action>

                      <v-list-item-content>
                        <v-list-item-title>Auto-add widgets</v-list-item-title>
                        <v-list-item-subtitle>Automatically add home screen widgets when downloads complete</v-list-item-subtitle>
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
                  v-model="settings"
                  multiple
                  active-class=""
                >
                  <v-list-item>
                    <template v-slot:default="{ active }">
                      <v-list-item-action>
                        <v-checkbox :input-value="active"></v-checkbox>
                      </v-list-item-action>

                      <v-list-item-content>
                        <v-list-item-title>Notifications</v-list-item-title>
                        <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                      </v-list-item-content>
                    </template>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:default="{ active }">
                      <v-list-item-action>
                        <v-checkbox :input-value="active"></v-checkbox>
                      </v-list-item-action>

                      <v-list-item-content>
                        <v-list-item-title>Sound</v-list-item-title>
                        <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
                      </v-list-item-content>
                    </template>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:default="{ active }">
                      <v-list-item-action>
                        <v-checkbox :input-value="active"></v-checkbox>
                      </v-list-item-action>

                      <v-list-item-content>
                        <v-list-item-title>Auto-add widgets</v-list-item-title>
                        <v-list-item-subtitle>Automatically add home screen widgets when downloads complete</v-list-item-subtitle>
                      </v-list-item-content>
                    </template>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header expand-icon="mdi-menu-down">
              Section 2
            </v-expansion-panel-header>
            <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header expand-icon="mdi-menu-down">
              Section 3
            </v-expansion-panel-header>
            <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
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
