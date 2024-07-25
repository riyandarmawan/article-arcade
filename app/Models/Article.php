<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Article extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'content',
        'user_id',
        'category_id'
    ];

    // likes
    public function likes(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'likes');
    }

    // comments
    public function comments(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'comments');
    }

    // category
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    // tags
    public function Articles(): BelongsToMany
    {
        return $this->belongsToMany(Tags::class, 'article_tag');
    }
}
