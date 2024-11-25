import { ref } from "vue";
export default () => {
  const results = ref([]);
  const loading = ref(false);
  const errors = ref(null);
  const call = (url, options = { method: "GET" }) => {
    loading.value = true;
    return fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        results.value = data;
        return data;
      })
      .catch((error) => {
        error.value = error;
        throw error;
      })
      .finally(() => {
        loading.value = false;
      });
  };
  return { results, loading, errors, call };
};
