---
layout: base.njk
title: "🎨 Creative Corner"
description: "Amazing creative posts, games, and pictures from our young artists!"
---

# 🎨 Welcome to the Creative Corner! 🌈

<div style="text-align: center; margin: 2rem 0;">
    <p style="font-size: 1.2rem; color: var(--text-secondary);">
        Discover amazing artwork, fun games, and creative stories made by kids like you! ✨
    </p>
</div>

<div class="creativity-grid">
    <div class="creativity-item bounce-on-hover sparkle">
        <h3>🎨 Artwork</h3>
        <p>Beautiful drawings and paintings</p>
    </div>
    <div class="creativity-item bounce-on-hover sparkle">
        <h3>🎮 Games</h3>
        <p>Fun games to play and learn</p>
    </div>
    <div class="creativity-item bounce-on-hover sparkle">
        <h3>📚 Stories</h3>
        <p>Amazing tales and adventures</p>
    </div>
    <div class="creativity-item bounce-on-hover sparkle">
        <h3>🏆 Challenges</h3>
        <p>Creative challenges to try</p>
    </div>
</div>

{% if collections.posts %}

<h2>🌟 Latest Creative Posts</h2>

<ul class="post-list">
{% for post in collections.posts | reverse %}
  <li class="sparkle">
    <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
    <div class="post-meta">📅 {{ post.data.date }}</div>
    <p>{{ post.data.description or "A wonderful creative adventure awaits!" }}</p>
    <a href="{{ post.url }}" class="fun-button">Read More! 🚀</a>
  </li>
{% endfor %}
</ul>
{% else %}
<div style="text-align: center; margin: 3rem 0;">
    <h3>🎪 No creative posts yet!</h3>
    <p>Be the first young artist to share something amazing!</p>
    <a href="/admin/" class="fun-button">Start Creating! 🎨</a>
</div>
{% endif %}

<div style="text-align: center; margin: 3rem 0; padding: 2rem; background: linear-gradient(135deg, var(--pastel-yellow), var(--pastel-pink)); border-radius: 25px;">
    <h3>🌈 Ready to Share Your Creativity?</h3>
    <p>Got a cool drawing, story, or game idea? Share it with everyone!</p>
    <a href="/admin/" class="fun-button">Upload Your Creation! ✨</a>
</div>
