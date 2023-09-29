<template>
  <div>
    <br><br>
    <div class="container">
      <form>
        <label for="name">Your Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required><br>

        <label for="email">Your Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" required><br>

        <p>Do you like the website:</p>
        <input type="radio" id="yes" name="yesno" value="yes">
        <label for="yes">Yes</label>

        <input type="radio" id="no" name="yesno" value="no">
        <label for="no">No</label><br>

        <label for="feedback">Feedback:</label>
        <textarea id="feedback" name="feedback" placeholder="" style="height:200px" required></textarea>

        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>
