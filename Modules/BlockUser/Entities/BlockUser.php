<?php

namespace Modules\BlockUser\Entities;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BlockUser extends Model
{
    use HasFactory;

    protected $fillable = ['id', 'from_block_user_id', 'to_block_user_id', 'added_date', 'added_user_id', 'updated_date', 'updated_user_id', 'updated_flag'];

    protected $table = "psx_block_users";

    const CREATED_AT = 'added_date';
    const UPDATED_AT = 'updated_date';

    const tableName = "psx_block_users";
    const id = "id";
    const fromBlockUserId = "from_block_user_id";
    const toBlockUserId = "to_block_user_id";
    const addedDate = 'added_date';

    protected static function newFactory()
    {
        // return \Modules\BlockUser\Database\factories\BlockUserFactory::new();
    }

    public function owner(){
        return $this->belongsTo(User::class, 'added_user_id');
    }

    public function editor(){
        return $this->belongsTo(User::class, 'updated_user_id');
    }
}
