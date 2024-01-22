// Save options to chrome.storage
function saveOptions() {
  var goal = document.getElementById("goal").value;
  var apiKey = document.getElementById("apiKey").value;
  const hideSidebar = document.getElementById("hideSidebar").checked;
  const hideHomepageContent = document.getElementById(
    "hideHomepageContent"
  ).checked;
  console.warn(hideSidebar, hideHomepageContent);

  chrome.storage.sync.set(
    {
      userGoal: goal,
      openAIKey: apiKey,
      hideSidebar: hideSidebar,
      hideHomepageContent: hideHomepageContent,
    },
    function () {
      // Update status to let user know options were saved.
      console.log("Options saved.");
    }
  );
}

// Restores options state using the preferences stored in chrome.storage
function restoreOptions() {
  chrome.storage.sync.get(
    {
      userGoal: "",
      openAIKey: "",
      hideSidebar: false,
      hideHomepageContent: false,
    },
    function (items) {
      console.warn(items);
      document.getElementById("goal").value = items.userGoal;
      document.getElementById("apiKey").value = items.openAIKey;
      document.getElementById("hideSidebar").checked = items.hideSidebar;
      document.getElementById("hideHomepageContent").checked =
        items.hideHomepageContent;
    }
  );
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("save").addEventListener("click", saveOptions);
